import { classDescriptor, propDescriptor, printObj } from "./Descriptor"

@classDescriptor("用户")
class User {

  @propDescriptor("账户")
  loginId: string

  @propDescriptor("密码")
  loginPwd: string
}

const u = new User();
u.loginId = "id"
u.loginPwd = "123456"
printObj(u)