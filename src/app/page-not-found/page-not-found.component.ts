import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-404',
    template: `
    <div class='center'>
      <img src="https://cdn-icons.flaticon.com/png/512/2959/premium/2959090.png?token=exp=1654162280~hmac=1065cb75caa9db812320357dc781e3fc"/>
      <h1>This page doesn't work !</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
