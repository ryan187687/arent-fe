import { Container } from '@/components/atoms/Container';

const Footer: React.FC = () => (
  <footer className="bg-gray-default flex items-center h-[5rem] lg:h-[8rem]">
    <Container>
      <div className="flex items-center gap-4 lg:gap-[45px] flex-wrap">
        <p className="text-white text-[11px]">会員登録</p>
        <p className="text-white text-[11px]">運営会社</p>
        <p className="text-white text-[11px]">利用規約</p>
        <p className="text-white text-[11px]">個人情報の取扱について</p>
        <p className="text-white text-[11px]">特定商取引法に基づく表記</p>
        <p className="text-white text-[11px]">お問い合わせ</p>
      </div>
    </Container>
  </footer>
);

export default Footer;
