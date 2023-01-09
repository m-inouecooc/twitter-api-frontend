export class MemberRegistrationApiResponseDto {
  readonly _registrationCompletionFlag: boolean;
  readonly _errorMessages: string;

  constructor(registrationCompletionFlag: boolean, errorMessages: string) {
    this._registrationCompletionFlag = registrationCompletionFlag;
    this._errorMessages = errorMessages;
  }

  public get registrationCompletionFlag(): boolean {
    return this._registrationCompletionFlag;
  }
  public get errorMessages(): string {
    return this._errorMessages;
  }
}
