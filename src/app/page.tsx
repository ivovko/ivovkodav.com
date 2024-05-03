import { Item } from "./Item";

export default function MainPage() {
  return (
    <main>
      <h5 className="main_name">Ihor Vovkodav</h5>
      <Item content={new Date().toLocaleDateString()} />
    </main>
  );
}
