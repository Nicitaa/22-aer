import { ClientSafeProvider, signIn } from "next-auth/react";
import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

export type Props = {
  provider: ClientSafeProvider;
};

export function ProviderButton({ provider }: Props) {
  const providerIcon =
    provider.id === "google" ? (
      <FaGoogle className="text-md" />
    ) : provider.id === "facebook" ? (
      <FaFacebook className="text-md" />
    ) : (
      <FaGithub className="text-md" />
    );

  const handleSignIn = () => {
    signIn(provider.id)
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="flex items-center w-full p-4 bg-primary text-black rounded-lg cursor-pointer"
      onClick={handleSignIn}
    >
      <div>{providerIcon}</div>

      <h3 className="flex grow justify-center text-xs tablet:text-sm laptop:text-md">
        Sign in with {provider.name}
      </h3>
    </div>
  );
}