import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const data = [
  {
    id: 1,
    title: "UI/UX Review Check",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    avatares: [
      {
        id: 1,
        name: "Lucas",
        image:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      },
      {
        id: 2,
        name: "Sandra",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    date: "12 de Agosto de 2021",
  },
  {
    id: 2,
    title: "UI/UX Review Check",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    avatares: [
      {
        id: 1,
        name: "Lucas",
        image:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      },
      {
        id: 2,
        name: "Sandra",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    date: "12 de Agosto de 2021",
  },
  {
    id: 3,
    title: "UI/UX Review Check",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    avatares: [
      {
        id: 1,
        name: "Lucas",
        image:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      },
      {
        id: 2,
        name: "Sandra",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    date: "12 de Agosto de 2021",
  },
  {
    id: 4,
    title: "UI/UX Review Check",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    avatares: [
      {
        id: 1,
        name: "Lucas",
        image:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      },
      {
        id: 2,
        name: "Sandra",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    date: "12 de Agosto de 2021",
  },
];

export default function CompEmphasisCard() {
  return (
    <>
      {data.map((item) => (
        <Card className="max-w-[24rem] overflow-hidden">
          <div key={item.id}>
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={item.image} alt={item.title} />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                <a href={`/event/${item.id}`}>{item.title}</a>
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                {item.description}
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center -space-x-3">
                {item.avatares.map((avatar) => (
                  <Tooltip content={avatar.name}>
                    <Avatar
                      key={avatar.id}
                      size="sm"
                      variant="circular"
                      alt={avatar.name}
                      src={avatar.image}
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                ))}
              </div>
              <Typography className="font-normal">{item.date}</Typography>
            </CardFooter>
          </div>
        </Card>
      ))}
    </>
  );
}
