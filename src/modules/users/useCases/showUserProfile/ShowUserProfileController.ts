import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.showUserProfileUseCase.execute({
        user_id: String(user_id),
      });

      if (!user) {
        throw new Error("User not exists!");
      }
      return response.status(200).json(user);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}
export { ShowUserProfileController };