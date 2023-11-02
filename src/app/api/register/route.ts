import { NextResponse } from 'next/server';
import CryptoJS from 'crypto-js';
import { db } from '@/db/db';
import { RegisterSchemaApi } from '@/utils/schemas';
import { users } from '@/db/schema/schema';

export const POST = async (request: Request) => {
  // validate the data
  const { password, email, fullName, phone } = RegisterSchemaApi.parse(
    await request.json()
  );
  try {
    // Hash the password with cryptoJS and create a new User
    await db.insert(users).values({
      passwordHash: CryptoJS.AES.encrypt(
        password,
        process.env.PASSWORD_SECRET!
      ).toString(),
      email: email.toLowerCase(),
      name: fullName,
      phone: phone.toString()
    });
    return new NextResponse(
      JSON.stringify({ message: 'Registration successful' }),
      {
        status: 201
      }
    );
  } catch (error: any) {
    console.error(error);
    if (error?.message.includes('user_email_unique'))
      return new NextResponse(
        JSON.stringify({ message: 'A user with this email already exists' }),
        {
          status: 401
        }
      );
    if (error?.message.includes('user_phone_unique'))
      return new NextResponse(
        JSON.stringify({
          message: 'A user with this phone number already exists'
        }),
        {
          status: 401
        }
      );
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      {
        status: 500
      }
    );
  }
};
