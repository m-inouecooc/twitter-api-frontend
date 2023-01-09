import axios from "axios";
import { MemberRegistrationApiResponseDto } from "../dtos/member-registration-api-response-dto";

export class MemberRegistrationApi {
  public static async memberRegistration(
    userName: string,
    mailAddress: string
  ) {
    console.log("api呼出し");
    const apiResponse = await axios.get("http://localhost:3000/", {
      params: {
        userName: userName,
        mailAddress: mailAddress,
      },
    });
    console.log("apiレスポンスデータ" + apiResponse);

    // return await this.responseConversion(apiResponse);
  }

  private static async responseConversion(responseData: any) {
    if (!responseData) {
      // TODO エラー画面に遷移する処理
    }

    return new MemberRegistrationApiResponseDto(
      responseData.registrationCompletionFlag,
      responseData.errorMessages
    );
  }
}
