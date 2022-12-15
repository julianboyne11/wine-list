import * as wines from "../data/data"
import Wine from "../components/Wine";

const WineList = () => {
  return ( 
    <>
      <h2>Vini a Bottiglia - Wine by the Bottle</h2>
      <br />
      <h2>Bollicine - Sparkling Italy</h2>
      {wines.sparklingItaly.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Champagne - France</h2>
      {wines.champagneFrance.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Rose</h2>
      {wines.rose.map(wine => <Wine wine={wine}/>)}
      <br />
      <h2>Vini Bianchi Italiani - Italian White Wines</h2>
      <br />
      <h2>Pinot Grigio</h2>
      {wines.pinotGrigio.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.whitePiedmont.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.whiteSardinia.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.whiteCampania.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.whiteFriulli.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.whiteSicily.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.whiteTrentino.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.whiteTuscany.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.whiteUmbria.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.whiteVeneto.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.whiteCalifornia.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.redApulia.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.redPiedmont.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.barolo.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.redSardinia.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.redSicily.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.redTuscany.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.redTrentinoAltoAdige.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.redVeneto.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.redSpain.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.redUsa.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.redArg.map(wine => <Wine wine={wine}/>)}
      <br />
      {wines.redChile.map(wine => <Wine wine={wine}/>)}
      <br />
    </>
  );
}

export default WineList;