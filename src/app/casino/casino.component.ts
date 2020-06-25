import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';


@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.scss']
})
export class CasinoComponent implements OnInit {
  games;

  constructor(private gamesService: GameService) {
  }

  ngOnInit(): void {
    this.gamesService.getAll().subscribe(
      (data: any[]) => {
        console.log(data);
        this.games = data;
      }
    );
  }

}
