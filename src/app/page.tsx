import { NavigationButtons } from "@/frontend/NavigationButtons";
import { PhotoFrame } from "@/frontend/PhotoFrame";

export default function MainPage() {
  return (
    <main className="flex flex-col w-full">
      <NavigationButtons />
      <div className="flex-1 min-h-[911px]">
        <h5 className="main_name">Ihor Vovkodav</h5>
      </div>
      <div className="flex-1 min-h-[911px]">
        <PhotoFrame photoPath="Elon_Musk_2015.png" />
      </div>
    </main>
  );
}
