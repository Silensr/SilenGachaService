import { lucia } from "lucia";
import { h3 } from "lucia/middleware";
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";

import { discord } from "@lucia-auth/oauth/providers";

const client = new PrismaClient();
// expect error (see next section)
export const auth = lucia({
	env: process.dev ? "DEV" : "PROD",
	middleware: h3(),
	adapter: prisma(client),

	getUserAttributes: (data) => {
		return {
			Username: data.username
		};
	}
});

const runtimeConfig = useRuntimeConfig();


export const discordAuth = discord(auth, {
	clientId: runtimeConfig.discordClientId,
	clientSecret: runtimeConfig.discordClientSecret
})

export type Auth = typeof auth;