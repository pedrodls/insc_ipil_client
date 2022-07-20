import { LocalStorageService, TypeAccountService } from "../environments/services";

export async function getAccount() {

  let accountName = ""

  let session: any = new LocalStorageService().getSession()

  let typeAccountService = new TypeAccountService()

  let account: any;

  const getAccountName = async (id: any) => {

    const _data = await typeAccountService.one(id).then(data => data.data.name.toLowerCase()).catch(e => e)

    accountName = _data

  }

  if (session) {

    account = session.user.authAccount

    await getAccountName(account)

  }

  return accountName

}