import '../Pages.css';

/** Mock customer data */
const customers = [
  { name: 'Olivia Martin', email: 'olivia.martin@email.com', avatar: 'OM', plan: 'Pro', status: 'Active', spent: '$1,249.00' },
  { name: 'Jackson Lee', email: 'jackson.lee@email.com', avatar: 'JL', plan: 'Pro', status: 'Active', spent: '$899.00' },
  { name: 'Isabella Nguyen', email: 'isabella.n@email.com', avatar: 'IN', plan: 'Free', status: 'Active', spent: '$0.00' },
  { name: 'William Kim', email: 'will.kim@email.com', avatar: 'WK', plan: 'Pro', status: 'Active', spent: '$1,499.00' },
  { name: 'Sofia Davis', email: 'sofia.davis@email.com', avatar: 'SD', plan: 'Free', status: 'Inactive', spent: '$0.00' },
  { name: 'Liam Johnson', email: 'liam.j@email.com', avatar: 'LJ', plan: 'Pro', status: 'Active', spent: '$649.00' },
  { name: 'Emma Wilson', email: 'emma.w@email.com', avatar: 'EW', plan: 'Pro', status: 'Active', spent: '$999.00' },
  { name: 'Noah Brown', email: 'noah.b@email.com', avatar: 'NB', plan: 'Free', status: 'Active', spent: '$0.00' },
  { name: 'Ava Garcia', email: 'ava.g@email.com', avatar: 'AG', plan: 'Pro', status: 'Inactive', spent: '$449.00' },
  { name: 'Ethan Martinez', email: 'ethan.m@email.com', avatar: 'EM', plan: 'Free', status: 'Active', spent: '$0.00' },
];

/**
 * Customers page — user directory with plan and status info.
 */
export default function Customers() {
  return (
    <div className="page" id="customers-page">
      <div className="page__header">
        <h2 className="page__title">Customers</h2>
        <p className="page__subtitle">Manage your {customers.length} registered users</p>
      </div>

      <div className="data-table">
        <div className="data-table__header">
          <span>Name</span>
          <span>Email</span>
          <span>Plan</span>
          <span>Status</span>
          <span>Total Spent</span>
        </div>

        {customers.map((customer, index) => (
          <div key={customer.email} className="data-table__row">
            <div className="data-table__name">
              <div className={`data-table__avatar data-table__avatar--${index % 5}`}>
                {customer.avatar}
              </div>
              <span className="data-table__value">{customer.name}</span>
            </div>
            <span className="data-table__email">{customer.email}</span>
            <span>
              <span className={`data-table__badge data-table__badge--${customer.plan.toLowerCase()}`}>
                {customer.plan}
              </span>
            </span>
            <span>
              <span className={`data-table__badge data-table__badge--${customer.status.toLowerCase()}`}>
                {customer.status}
              </span>
            </span>
            <span className="data-table__value">{customer.spent}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
