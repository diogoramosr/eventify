import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import {
  UserIcon,
  HomeIcon,
  UserCircleIcon,
  Square3Stack3DIcon,
  ArrowRightOnRectangleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default function CompSpeedDial() {
  const { user, signOut } = useContext(AuthContext);

  async function handleSignOut() {
    signOut();
  }

  return (
    <div className="relative w-full z-[999] ">
      <div className="fixed bottom-12 right-12">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full bg-black">
              <UserIcon className="h-5 w-5 transition-transform duration-700 group-hover:rotate-[360deg]" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            {user ? (
              <>
                <button onClick={handleSignOut}>
                  <SpeedDialAction className="h-13 w-13">
                    <ArrowRightOnRectangleIcon className="h-4 w-4" />
                    <Typography className="text-[12px] font-medium">
                      Sair
                    </Typography>
                  </SpeedDialAction>
                </button>
                <a href="/profile">
                  <SpeedDialAction className="h-13 w-13">
                    <UserCircleIcon className="h-5 w-5" />
                    <Typography className="text-[12px] font-medium">
                      Perfil
                    </Typography>
                  </SpeedDialAction>
                </a>
                <a href="/user-events">
                  <SpeedDialAction className="h-13 w-13">
                    <Square3Stack3DIcon className="h-4 w-4" />
                    <Typography className="text-[12px] font-medium">
                      Eventos
                    </Typography>
                  </SpeedDialAction>
                </a>
                <a href="/favorite">
                  <SpeedDialAction className="h-14 w-14">
                    <HeartIcon className="h-4 w-4" />
                    <Typography className="text-[11px] font-medium">
                      Favoritos
                    </Typography>
                  </SpeedDialAction>
                </a>
              </>
            ) : (
              <>
                <a href="/signin">
                  <SpeedDialAction className="h-13 w-13">
                    <HomeIcon className="h-4 w-4" />
                    <Typography className="text-[12px] font-medium">
                      Entrar
                    </Typography>
                  </SpeedDialAction>
                </a>
                <a href="/favorite">
                  <SpeedDialAction className="h-14 w-14">
                    <HeartIcon className="h-4 w-4" />
                    <Typography className="text-[11px] font-medium">
                      Favoritos
                    </Typography>
                  </SpeedDialAction>
                </a>
              </>
            )}
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}
