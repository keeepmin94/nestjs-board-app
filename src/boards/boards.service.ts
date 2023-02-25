import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid'; //v1 버젼 쓴다 (uuid란 이름으로 쓰겠다)
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board) //https://www.inflearn.com/questions/651328/typeorm-db-%EC%97%B0%EA%B2%B0-%EC%98%A4%EB%A5%98%EC%9E%85%EB%8B%88%EB%8B%A4
    private boardRepository: BoardRepository,
  ) {}

  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);
    //const found = await this.boardRepository.findOne({ where: { id } }); //$ npm install typeorm@0.2  명령어를 통해서 공식문서에서 권장하는 버전으로 변경 부탁드립니다.
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }
  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Can't find Board with id ${id}`);
  //   }
  //   return found;
  // }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    //return this.boardRepository.createBoard(createBoardDto); //typeorm 0.3에서부터는 deprecated 되어 동작하지 않는다고 합니다. 데이터 베이스 관련 로직을 레퍼지토리로 옮기지 마시고 서비스에서 처리하면 해결될 듯 합니다.
    //https://velog.io/@wonjun1995/NestJS9.x.x-TypeORM0.3.x%EC%97%90%EC%84%9C-customRepository-%EC%89%BD%EA%B2%8C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
    const { title, description } = createBoardDto;

    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.boardRepository.save(board);
    return board;
  }

  // createBoard(createBoardDto: CreateBoardDto) {
  //   // const title = createBoardDto.title;
  //   // const {title} = createBoardDto;
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title, // == title: title,
  //     description, // == description: description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    //지우려는 자료가 없을때
    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;
    await this.boardRepository.save(board);
    return board;
  }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
