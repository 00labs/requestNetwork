import * as express from 'express';
// import { EthereumPrivateKeySignatureProvider } from '@requestnetwork/epk-signature';
import * as RequestNetwork from '.';

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.get('/request', async function (req, res) {
  // this is a local ERC20 token deployed on ganache
  // const localToken = '0xf17FF940864351631b1be3ac03702dEA085ba51c';
  // const PAYEE_PRIVATE_KEY = '0xa8e85c1c3bdcb3221493d1f43dfd9e7dd966c799fd46bd0d6a45a97f9df59adb';

  //#region Identity setup
  // Payee Identity & Private key
  // const payeeSignatureInfo = {
  //   method: RequestNetwork.Types.Signature.METHOD.ECDSA,
  //   privateKey: PAYEE_PRIVATE_KEY,
  // };
  //#endregion

  //#region RequestNetwork setup
  // ✏️ Signature provider
  // const signatureProvider: RequestNetwork.Types.SignatureProvider.ISignatureProvider =
  //   new EthereumPrivateKeySignatureProvider(payeeSignatureInfo);

  const requestNetwork = new RequestNetwork.RequestNetwork({
    // signatureProvider,
    // currencies: [
    //   {
    //     address: localToken,
    //     decimals: 18,
    //     network: 'goerli',
    //     symbol: 'ERC20',
    //     type: RequestNetwork.Types.RequestLogic.CURRENCY.ERC20,
    //   },
    // ],
  });

  const requestID: string = req.query.id as string;

  if (requestID == null) {
    res.json({ error: 'No requestID given' });
    return;
  }

  const request = await requestNetwork.fromRequestId(
    requestID,
    // '01bd5067afdacbe83b051708db2a10000ea4940ebda257e21d42b0d851123575a0',
  );
  await request.refresh();
  res.json(request.getData());
});
