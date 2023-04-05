import { Button } from "../button";

const PlanConfig = [
  {
    title: "Free",
    description: "It's free forever!",
    price: "$0",
    upgradeLink: "",
    features: [
      {
        title: "usage limits",
        description: "3 databases, mock database 3 rows",
      },
      {
        title: "add rows to mock database",
        isSupported: false,
      },
    ],
  },
  {
    title: "Lifetime Access",
    description: "One time payment, unlock all features",
    price: "$9.99",
    upgradeLink:
      "https://platools.lemonsqueezy.com/checkout/buy/a62339fb-52a6-4ccf-8f13-b915a42f7910",
    features: [
      {
        title: "usage limits",
        description: "unlimited databases, mock database 100 rows",
        isSupported: true,
      },
      {
        title: "add rows to mock database",
        isSupported: true,
      },
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="bg-white" id="pricing">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
          {/* <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 ">
            Price
          </h2> */}
          {/* <p className="mb-5 font-light text-gray-500 sm:text-xl ">
            {`It's free to use with some limitations. If you want to use Plato without limitations, you can purchase a lifetime access for $9.99.`}
          </p> */}
          <table className="table-auto border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="border border-slate-300"></th>
                {PlanConfig.map((plan) => {
                  return (
                    <th
                      key={plan.title}
                      className="border border-slate-300 p-2 md:truncate"
                    >
                      <p className="text-3xl">{plan.title}</p>
                      <p className="opacity-50 ">{plan.description}</p>
                      <div className="text-2xl">{plan.price}</div>
                      {plan.upgradeLink && (
                        <a href={plan.upgradeLink}>
                          <Button
                            variant={plan.upgradeLink ? "default" : "outline"}
                            disabled={!plan.upgradeLink}
                          >
                            Upgrade
                          </Button>
                        </a>
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {PlanConfig[0]?.features.map((feature, fIndex) => {
                return (
                  <tr key={feature.title}>
                    <td className="border border-slate-300 p-4 md:truncate">
                      {feature.title}
                    </td>
                    {PlanConfig.map((plan) => {
                      const planFeature = plan.features[fIndex];
                      return (
                        <td
                          key={plan.title}
                          className="border border-slate-300 p-4 md:truncate"
                        >
                          {planFeature?.description ? (
                            <p>{planFeature.description}</p>
                          ) : planFeature?.isSupported ? (
                            "✅"
                          ) : (
                            "❌"
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-2 lg:space-y-0 xl:gap-10"></div>
      </div>
    </section>
  );
};
