import { AtualizaProdutoDTO } from './dto/atualizaProduto.dto';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoService } from './produto.service';
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    criaNovo(dadosProduto: CriaProdutoDTO): Promise<void>;
    listaTodos(): Promise<import("./dto/ListaProduto.dto").ListaProdutoDTO[]>;
    atualiza(id: string, dadosProduto: AtualizaProdutoDTO): Promise<{
        mensagem: string;
        produto: void;
    }>;
    remove(id: string): Promise<{
        mensagem: string;
        produto: void;
    }>;
}
