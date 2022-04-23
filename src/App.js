import { PaymentCard } from "./paymentCard";
import { PlanCard } from "./planCard";

const Background = ({ children }) => {
  return (
    <div className='bg-gradient-to-b from-darkPurple to-pureBlack min-h-screen '>
      <div className='backdrop-blur-sm'>{children}</div>
    </div>
  );
};

function App() {
  return (
    <Background>
      {/* Container */}
      <div className='container flex flex-col md:flex-row md:justify-around items-center md:items-stretch'>
        <PlanCard />
        <PaymentCard />
      </div>
    </Background>
  );
}

export default App;
