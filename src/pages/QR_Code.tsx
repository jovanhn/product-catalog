
import { Scanner } from '@yudiel/react-qr-scanner';

const QR_Code = () =>
    <Scanner
        onResult={(text, result) => console.log(text, result)}
        onError={(error) => console.log(error?.message)}
    />

export default QR_Code