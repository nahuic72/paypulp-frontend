import { useContext } from 'react'
import CardImage from 'Components/Dashboard/CardImage'
import DashboardCard from 'Components/Dashboard/DashboardCard'
import TransactionsTable from 'Components/Transactions/TransactionsTable'
import { userContext } from 'Context/UserContext'
import useGetTransactions from 'Hooks/useGetTransactions'
import 'Styles/Dashboard.css'

const Dashboard = () => {
  const { userInfo, paymentMethods /* transactions */ } = useContext(userContext)
  const { transactions } = useGetTransactions()
  // why when returning context from hook renders fine but accesing context directly doesn't ????
  return (
    <section className="dashboard">
      <div className="dash-title-wrapper">
        <h2 className="dash-title">Welcome, {userInfo?.firstName}</h2>
      </div>
      <DashboardCard className="dash-transactions" title="Recent Transactions">
        <TransactionsTable transactions={transactions} />
      </DashboardCard>
      <DashboardCard className="dash-pay-method" title="Main Payment Method">
        {paymentMethods.length > 0 ? (
          <CardImage />
        ) : (
          <h2 className="dash-empty-msg">Please select a default payment method</h2>
        )}
      </DashboardCard>
    </section>
  )
}

export default Dashboard
