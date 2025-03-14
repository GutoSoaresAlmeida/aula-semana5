import { Repository } from 'typeorm';
import { ListaProdutoDTO } from './dto/ListaProduto.dto';
import { ProdutoEntity } from './produto.entity';
import { AtualizaProdutoDTO } from './dto/AtualizaProduto.dto';
import { FornecedorEntity } from 'src/Fornecedor/fornecedor.entity';
export declare class ProdutoService {
    private readonly produtoRepository;
    private readonly fornecedorRepository;
    constructor(produtoRepository: Repository<ProdutoEntity>, fornecedorRepository: Repository<FornecedorEntity>);
    criaProduto(produtoEntity: ProdutoEntity, fornecedorId: string): Promise<ProdutoEntity>;
    listProdutos(): Promise<ListaProdutoDTO[]>;
    listProdutoPorId(id: string): Promise<ListaProdutoDTO>;
    atualizaProduto(id: string, novosDados: AtualizaProdutoDTO): Promise<ProdutoEntity>;
    deletaProduto(id: string): Promise<ProdutoEntity>;
}
