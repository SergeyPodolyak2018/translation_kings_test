import './App.css';
import { useMain } from './hooks/useMain';
import CollapsibleTableClients from './components/clients';
import OrdersWithClients from './components/ordersClients';
import LabTabs from './components/navigation';
import ClientModal from './components/clientModal';
import OrderModal from './components/orderModal ';
import Button from '@mui/material/Button';

function App() {
  const {
    status,
    getOrders,
    clients,
    orders,
    ordersWithClients,
    navigation,
    changeNavigation,
    modal,
    openModal,
    createClient,
    createOrder,
  } = useMain();

  return (
    <div className='mainWrapper'>
      <div className='navigation'>
        <LabTabs
          navigation={navigation}
          action={changeNavigation}
        />
        <div className='button_wrap'>
          <Button onClick={() => openModal('client')}>Add client</Button>
          <Button onClick={() => openModal('order')}>Add order</Button>
        </div>
      </div>
      <ClientModal
        open={modal === 'client'}
        close={() => openModal('none')}
        submit={createClient}
      />
      <OrderModal
        open={modal === 'order'}
        close={() => openModal('none')}
        submit={createOrder}
        clients={clients}
      />

      {status === 'loading' ? (
        <div>Loading...</div>
      ) : (
        <>
          {navigation === 'clients' ? (
            <CollapsibleTableClients
              clients={clients}
              orders={orders}
              getOrders={getOrders}
            />
          ) : (
            <OrdersWithClients data={ordersWithClients} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
