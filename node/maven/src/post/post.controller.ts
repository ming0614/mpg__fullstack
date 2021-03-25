import { Request, Response } from 'express';  // @types/express
import { createPost } from './post.service';
export const store = async (
    request: Request,
    response
  ) => {
      console.log(request.body, request.url, '////////////');  // 搞ts就会有提示
      const { title, content } = request.body
      // 存数据 title content  -> 数据存储服务  service
      const data = await createPost({title, content})
      response.status(201).send('保存成功')  // 出了成功, 还可以表示添加一条数据
  }
