import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid'; //v1 버젼 쓴다 (uuid란 이름으로 쓰겠다)

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title, // == title: title,
      description, // == description: description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
}
