import type { Game } from "@prisma/client";

import { prisma } from "~/db.server";

export async function getGamesById(id: Game["id"]) {
  return prisma.game.findUnique({ where: { id } });
}
