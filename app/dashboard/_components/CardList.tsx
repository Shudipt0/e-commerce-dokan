import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const popularContent = [
  {
    id: 1,
    title: "Javascript Tutorial",
    badge: "Jon Doe",
    image:
      "https://res.cloudinary.com/dsktb64i8/image/upload/v1761231309/n3k0q296o4bi2oxjcxaf.jpg",
    count: 4000,
  },
  {
    id: 2,
    title: "Javascript Tutorial",
    badge: "Jon Doe",
    image:
      "https://res.cloudinary.com/dsktb64i8/image/upload/v1761231309/n3k0q296o4bi2oxjcxaf.jpg",
    count: 4000,
  },
  {
    id: 3,
    title: "Javascript Tutorial",
    badge: "Jon Doe",
    image:
      "https://res.cloudinary.com/dsktb64i8/image/upload/v1761231309/n3k0q296o4bi2oxjcxaf.jpg",
    count: 4000,
  },
  {
    id: 4,
    title: "Javascript Tutorial",
    badge: "Jon Doe",
    image:
      "https://res.cloudinary.com/dsktb64i8/image/upload/v1761231309/n3k0q296o4bi2oxjcxaf.jpg",
    count: 4000,
  },
  {
    id: 5,
    title: "Javascript Tutorial",
    badge: "Jon Doe",
    image:
      "https://res.cloudinary.com/dsktb64i8/image/upload/v1761231309/n3k0q296o4bi2oxjcxaf.jpg",
    count: 4000,
  },
];

const latestContent = [
  {
    id: 1,
    title: "Node js Tutorial",
    badge: "Jon Doe",
    image:
      "https://res.cloudinary.com/dsktb64i8/image/upload/v1761231309/n3k0q296o4bi2oxjcxaf.jpg",
    count: 4000,
  },
  {
    id: 2,
    title: "Node js Tutorial",
    badge: "Jon Doe",
    image:
      "https://res.cloudinary.com/dsktb64i8/image/upload/v1761231309/n3k0q296o4bi2oxjcxaf.jpg",
    count: 4000,
  },
  {
    id: 3,
    title: "Node js Tutorial",
    badge: "Jon Doe",
    image:
      "https://res.cloudinary.com/dsktb64i8/image/upload/v1761231309/n3k0q296o4bi2oxjcxaf.jpg",
    count: 4000,
  },
  {
    id: 4,
    title: "Node js Tutorial",
    badge: "Jon Doe",
    image:
      "https://res.cloudinary.com/dsktb64i8/image/upload/v1761231309/n3k0q296o4bi2oxjcxaf.jpg",
    count: 4000,
  },
  {
    id: 5,
    title: "Node js Tutorial",
    badge: "Jon Doe",
    image:
      "https://res.cloudinary.com/dsktb64i8/image/upload/v1761231309/n3k0q296o4bi2oxjcxaf.jpg",
    count: 4000,
  },
];

const CardList = async ({ title }: { title: string }) => {
  // const orders = await fetchAllOrders();
  // console.log(orders[0].ordered_product);

  // const countMap: Record<string, number> = {};

  // orders.forEach((order: any) => {
  //   const title = order.ordered_product?.[0]?.title;
  //   if (title) {
  //     countMap[title] = (countMap[title] || 0) + 1;
  //   }
  // });

  // const result = Object.entries(countMap)
  //   .sort((a, b) => b[1] - a[1])
  //   .map(([title]) => title);

  // console.log(result);

  const list = title === "Popular Content" ? popularContent : latestContent;
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list?.map((item) => (
          <Card
            key={item.id}
            className="flex-row items-center justify-between px-4 py-2"
          >
            <div className="w-10 h-10 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-[12px] font-medium">
                {item.title}
              </CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
