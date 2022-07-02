import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  if (url.pathname === '/') {
    return NextResponse.redirect(new URL('/loja', url));
  }
  return NextResponse.next();
}
// O middleware só está aqui nesse cenário
// onde tudo o que temos é a página da loja.
// Caso tivéssemos mais páginas, ele seria desnecessário.
