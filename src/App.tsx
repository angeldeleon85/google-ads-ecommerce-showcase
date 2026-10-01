import './App.css'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const events = [
  'view_item',
  'add_to_cart',
  'begin_checkout',
  'purchase',
  'conversion',
  'dynamic_remarketing',
]

const readiness = [
  {
    title: 'Conversion Tracking',
    detail: 'Primary purchase conversion, revenue value, currency, transaction ID, and deduplication plan.',
  },
  {
    title: 'Enhanced Conversions',
    detail: 'Customer data mapping plan with consent-aware handling and hashed user-provided data.',
  },
  {
    title: 'Dynamic Remarketing',
    detail: 'Retail event parameters with item IDs aligned to Merchant Center feed IDs.',
  },
  {
    title: 'Performance Max Feed',
    detail: 'Product groups, custom labels, margin tiers, seasonal products, and asset coverage.',
  },
]

const products = [
  { id: 'LKA-HOODIE-001', name: 'Merino Travel Hoodie', value: 89, label: 'high_margin' },
  { id: 'LKA-BAG-014', name: 'Packable Weekender Bag', value: 74, label: 'best_seller' },
  { id: 'LKA-SHOE-118', name: 'Everyday Leather Sneaker', value: 118, label: 'seasonal_push' },
]

function pushAdsEvent(event: string) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event,
    google_business_vertical: 'retail',
    value: products[0].value,
    currency: 'USD',
    items: [
      {
        id: products[0].id,
        google_business_vertical: 'retail',
      },
    ],
  })
  window.dispatchEvent(new CustomEvent('ads-tracking-event', { detail: event }))
}

function App() {
  return (
    <main>
      <section className="hero">
        <div>
          <p className="eyebrow">Google Ads Ecommerce Showcase</p>
          <h1>Retail ads measurement and feed strategy for profitable ecommerce growth.</h1>
          <p>
            A professional implementation workspace for Google Ads conversion tracking, enhanced conversions,
            dynamic remarketing events, Performance Max feed planning, Shopping readiness, and
            GTM-friendly event documentation.
          </p>
        </div>
        <aside className="score-card">
          <span>Tracking readiness</span>
          <strong>95%</strong>
          <small>Implementation plan</small>
        </aside>
      </section>

      <section className="section cards">
        {readiness.map((item) => (
          <article key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="section two-col">
        <div>
          <p className="eyebrow">GTM Event Contract</p>
          <h2>Google Ads retail signals clients expect</h2>
          <p>
            These controls push documented events to <code>window.dataLayer</code>. The event names and
            retail parameters are designed to show how product feed IDs, remarketing events,
            conversion values, and campaign optimization signals connect.
          </p>
          <div className="event-buttons">
            {events.map((event) => (
              <button type="button" key={event} onClick={() => pushAdsEvent(event)}>
                {event}
              </button>
            ))}
          </div>
        </div>
        <pre>{`window.dataLayer.push({
  event: 'purchase',
  google_business_vertical: 'retail',
  value: 89,
  currency: 'USD',
  transaction_id: 'T-10001',
  items: [{
    id: 'LKA-HOODIE-001',
    google_business_vertical: 'retail'
  }]
})`}</pre>
      </section>

      <section className="section">
        <p className="eyebrow">Performance Max Planning</p>
        <h2>Product feed segmentation for campaign decisions</h2>
        <div className="feed-table" role="table" aria-label="Google Ads product feed strategy">
          <div role="row" className="head">
            <span role="columnheader">Product ID</span>
            <span role="columnheader">Product</span>
            <span role="columnheader">Value</span>
            <span role="columnheader">Custom Label</span>
            <span role="columnheader">Optimization Use</span>
          </div>
          {products.map((product) => (
            <div role="row" key={product.id}>
              <span role="cell">{product.id}</span>
              <span role="cell">{product.name}</span>
              <span role="cell">${product.value}</span>
              <span role="cell">{product.label}</span>
              <span role="cell">Asset group, bidding, reporting, and promotion planning</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section proof">
        <div>
          <p className="eyebrow">Client Proof</p>
          <h2>What this project proves</h2>
        </div>
        <p>
          I can connect ecommerce product data, Google Merchant Center feeds, Google Ads
          conversion tracking, GTM events, and campaign structure into a clear implementation
          plan for online stores.
        </p>
      </section>
    </main>
  )
}

export default App
