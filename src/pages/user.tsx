import { api } from "~/utils/api";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductList = () => {
  const product = api.product.getAll.useQuery();

  return (
    <div>
      {product.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {product.data?.map((product) => (
            <div key={product.id}>
              <div>{product.name}</div>
              <div>{product.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function User() {
  const userProduct = api.user.products.useQuery();
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">My Account</TabsTrigger>
        <TabsTrigger value="apps">My Apps</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Make changes to your account here. Click save when you&apos;re done.
        </p>
      </TabsContent>
      <TabsContent value="apps">
        {userProduct.isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {userProduct.data?.map((product) => (
              <div key={product.id}>
                <div>{product.name}</div>
                <div>{product.description}</div>
              </div>
            ))}
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}
