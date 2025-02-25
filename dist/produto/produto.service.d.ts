import { ListaProdutoDTO } from './dto/ListaProduto.dto';
import { ProdutoEntity } from './produto.entity';
import { Repository } from 'typeorm';
import { AtualizaProdutoDTO } from './dto/AtualizaProduto.dto';
export declare class ProdutoService {
    private readonly produtoRepository;
    constructor(produtoRepository: Repository<ProdutoEntity>);
    criaProduto(produtoEntity: ProdutoEntity): Promise<void>;
    listProdutos(): Promise<ListaProdutoDTO[]>;
    atualizaProduto(id: string, novosDados: AtualizaProdutoDTO): Promise<void>;
    deletaProduto(id: string): Promise<void>;
}
