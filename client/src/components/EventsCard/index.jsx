import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function CompEventCard({
  _id,
  title,
  description,
  date,
  category,
  banner_url,
  satisfaction,
}) {
  // TRADUZIR CATEGORIA VINDO DO BACKEND
  if (category === "Free") {
    category = "Grátis";
  } else if (category === "Paid") {
    category = "Pago";
  } else if (category === "Family") {
    category = "Família";
  } else if (category === "Children") {
    category = "Infantil";
  } else if (category === "Adult") {
    category = "Adulto";
  }

  return (
    <>
      <Card className="flex-row w-full max-w-[35rem] h-[25rem]">
        <CardHeader
          shadow={false}
          floated={false}
          className="w-2/5 shrink-0 m-0 rounded-r-none"
        >
          <img
            src={banner_url[0]}
            alt={title}
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody className="flex flex-col justify-between">
          <Typography variant="h6" color="blue" className="uppercase mb-4">
            {category}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
            {description}
          </Typography>
          <a href={`/event/${_id}`} className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              <Typography color="blue" className="font-normal">
                Saiba mais
              </Typography>
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
        </CardBody>
      </Card>
    </>
  );
}
