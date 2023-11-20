import { GetServerSidePropsContext } from "next"
import React from "react"
import { prisma } from "~/server/db"

type ChangePasswordProps = {
  userId: string
}

export default function ChangePassword({ userId }: ChangePasswordProps) {
  console.log(userId)
  // Render your component here using the userId
  return <div>change-password</div>
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { recoveryToken } = context.query
  const dbRecoveryToken = await prisma.recoveryToken.findFirst({
    where: { token: recoveryToken as string, expires: { gte: new Date() } },
    include: { user: true }, // Include the associated user
  })
  if (!recoveryToken) {
    return {
      redirect: {
        destination: "/error", // Redirect to an error page if the token is invalid or expired
        permanent: false,
      },
    }
  }

  return {
    props: {
      userId: dbRecoveryToken?.user?.id, // Pass the user ID to the component
    },
  }
}
