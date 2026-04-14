import { Check } from 'lucide-react';
import '../Pages.css';

/** Pricing plans data */
const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/forever',
    featured: false,
    features: [
      'Up to 100 users',
      'Basic analytics',
      'Email support',
      '1 GB storage',
      'Community access',
    ],
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Unlimited users',
      'Advanced analytics',
      'Priority support',
      '100 GB storage',
      'Custom integrations',
      'API access',
      'Team collaboration',
    ],
  },
  {
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    featured: false,
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'SSO & SAML',
      'Unlimited storage',
      'Custom contracts',
      'SLA guarantee',
      '24/7 phone support',
    ],
  },
];

/**
 * Products page — pricing plans comparison.
 */
export default function Products() {
  return (
    <div className="page" id="products-page">
      <div className="page__header">
        <h2 className="page__title">Products</h2>
        <p className="page__subtitle">Subscription plans and pricing</p>
      </div>

      <div className="page__grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
          >
            {plan.badge && <span className="pricing-card__badge">{plan.badge}</span>}
            <h3 className="pricing-card__name">{plan.name}</h3>
            <div className="pricing-card__price">
              <span className="pricing-card__amount">{plan.price}</span>
              <span className="pricing-card__period">{plan.period}</span>
            </div>
            <div className="pricing-card__features">
              {plan.features.map((feature) => (
                <div key={feature} className="pricing-card__feature">
                  <Check size={16} className="pricing-card__feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button
              className={`pricing-card__btn ${plan.featured ? 'pricing-card__btn--primary' : 'pricing-card__btn--outline'}`}
            >
              {plan.featured ? 'Get Started' : 'Contact Sales'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
