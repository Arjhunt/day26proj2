import logo from './logo.svg';
import './App.css';
import Prodprice from './Prodprice';


function App() {

let priceList=[
  {
    packName: "BASIC",
    Members: "For Team of 3-5 Members",
    price: 28,
    saves:"$20" ,
    features: [
      {
        name: "Perfect of Small Team"
      },
      {
        name: "Unlimited Invoices"
      },
      {
        name: "Project Management"
      }
    ]
  },
  {
    packName: "INTERMEDIATE ",
    Members: "For Team of 5-10 Members",
    extra: "Popular",
    price: 39,
    saves:"$30" ,
    features: [
      {
        name: "Perfect of Small Team"
      },
      {
        name: "Unlimited Invoices"
      },
      {
        name: "Project Management"
      },
      {
        name: "Team Management"
      }
    ]

  },
  {
    packName: "HIGH CLASS ",
    Members: "For Team of 10-25 Members",
    price: 58,
    saves:"$50",
    features: [
      {
        name: "Perfect of Small Team"
      },
      {
        name: "Unlimited Invoices"
      },
      {
        name: "Project Management"
      },
      {
        name: "Team Management"
      },
      {
        name: "Time Tracking"
      }
    ]
  },
  {
    packName: "SUPREME",
    Members: "For Team of 25-100 Members",
    price: 99,
    saves:"$80",
    features: [
      {
        name: "Perfect of Small Team"
      },
      {
        name: "Unlimited Invoices"
      },
      {
        name: "Project Management"
      },
      {
        name: "Team Management"
      },
      {
        name: "Time Tracking"
      }
    ]
  }
]


  return (
    <div class="pricing1 py-5 bg-light">
      <div class="container">
      <div class="row mt-5">
          {
        
          priceList.map(obj=>{
            return <Prodprice data={obj}></Prodprice>
          })
         
          }

        </div>
      </div>
    </div>
  );
}

export default App;
