import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';


@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.scss']
})
export class CasinoComponent implements OnInit {
  games;
  totalPages;
  stringy = '...';
  constructor(private gamesService: GameService) {
  }
  ngOnInit(): void {
    this.listItems(1);
  }

  listItems(pageNumber: any) {
    this.gamesService.getAll(pageNumber, 20).subscribe(
      (data) => {
        // .headers.get('X-Total-Count'
        this.totalPages = Math.ceil(data.headers.get('X-Total-Count') / 20);
        this.games = data.body;
      }
    );
  }
}
