import { z } from "zod";

const boardContentTypeSchema = z.object({
  token: z.string().min(1, "팀 참여 토큰은 필수 입력입니다."),
  content: z.string().min(1, "게시글 내용은 필수 입력입니다."),
});

const boardAddEditSchema = z.object({
  title: z
    .string()
    .min(1, "게시글 제목은 필수 입력입니다.")
    .max(200, "게시물 제목은 200자를 넘을 수 없습니다."),
  content: boardContentTypeSchema,
  image: z.string().optional(),
});

export default boardAddEditSchema;
