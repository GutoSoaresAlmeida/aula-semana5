import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { Repository } from 'typeorm';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
export declare class UsuarioService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<UsuarioEntity>);
    criaUsuario(usuarioEntity: UsuarioEntity): Promise<void>;
    listUsuarios(): Promise<ListaUsuarioDTO[]>;
    buscaPorEmail(email: string): Promise<UsuarioEntity>;
    atualizaUsuario(id: string, novosDados: AtualizaUsuarioDTO): Promise<void>;
    deletaUsuario(id: string): Promise<void>;
}
