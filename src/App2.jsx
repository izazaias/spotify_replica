const App2 = () => {
  return (
    <div>App2</div>
  )
}

export default App2

// rafce

// Arrow function
// const App2 = () => <h1>Olá, Mundo!</h1>;

// Nomeação de Componentes
// PascalCase

// Nomeação de Variavel, Função...
// camelCaseConcundaDoCamelo

// export default, posso exportar com qualquer nome e sem chaves
// export 'sem default', só posso importar entre chaves e com o nome exportado

// Self closing tag
// <Header></Header>
// <Header />

// Nomeação de classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small

// Tag vazia em React se chama Fragment ou Fragmento

// {items === 5 ? (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// ) : (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// )}

// {Array(items)
//   .fill()
//   .map((currentValue, index) => (
//     <SingleItem key={`${title}-${index}`} />
//   ))}