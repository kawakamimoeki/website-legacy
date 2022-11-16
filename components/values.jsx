import Heading from './heading.jsx'
import Dotted from './dotted'

export default function component() {
  return (
    <div className="mb-5">
      <Heading>Value</Heading>
      <h3 className="text-lg font-bold">
        <span className="marker marker-sky">Empathize</span> through Products
      </h3>
      <p className="mb-3">
        Rather than asking the user&apos;s mood or forcing one&apos;s own ideas
        on them, the creator and the user should create the product together
        while empathizing with each other. We believe that this is what makes a
        good product. I want to start development from the point of asking,
        &quot;<Dotted>What do you think of this great product I made?</Dotted>
        &quot;
      </p>
      <h3 className="text-lg font-bold">
        Products <span className="marker marker-sky">Lead</span> Users
      </h3>
      <p>
        It aims to maximize user independence. I think the ideal product is one
        that allows users to achieve their goals on their own without having to
        do anything. Even if a product requires human support now, the product
        itself should eventually guide the user.{' '}
        <Dotted>
          If this is done, the number of users who can be helped will increase
          exponentially
        </Dotted>
        .
      </p>
    </div>
  )
}
