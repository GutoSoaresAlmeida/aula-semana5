import { ProdutoImagemEntity } from './produto-imagem.entity';
import { ProdutoCaracteristicaEntity } from './produto-caracteristica.entity';
export declare class ProdutoEntity {
    id: string;
    usuarioId: string;
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    categoria: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    imagens: ProdutoImagemEntity[];
    caracteristicas: ProdutoCaracteristicaEntity[];
}
