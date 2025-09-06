import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";



const app = new Hono()
    .post(
        "/login",
        zValidator("json", z.object({
            email: z.string().email(),
            password: z.string(),
        })),
        (c) => {
            return c.json({ success: "OK" });
        }
    );

export default app;