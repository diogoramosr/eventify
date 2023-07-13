import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function CompCard({ _id, title, description, image, date }) {
  return (
    <div className="flex items-center justify-center p-1">
      <Card className="flex-row w-full max-w-[65rem] h-[30rem]">
        <CardHeader
          shadow={false}
          floated={false}
          className="w-2/5 shrink-0 m-0 rounded-r-none"
        >
          <img src={image} alt="image" className="w-full h-full object-cover" />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue" className="uppercase mb-4">
            {date}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
            {description}
          </Typography>
          <a href={`/event/${_id}`} className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Saiba mais
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
}
