import { Amplify, API } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

console.log('Amplify:', Amplify);
console.log('API:', API);

const apiName = 'apibacktestingAPI'; 
const path = '/quantum';             

function Quantum() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!API) {
      console.error('API is not available');
      return;
    }

    API.get(apiName, path)
      .then(response => setData(response))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Quantum computing</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Quantum;
