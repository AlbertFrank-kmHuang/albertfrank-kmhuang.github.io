export interface PlaygroundGame {
  title: string;
  description: string;
  href: string;
  image?: string;
}

// 新游戏完成后，在这里登记名称、页面路径和可选的封面图。
export const playgroundGames: PlaygroundGame[] = [
  {
    title: "扫雷",
    description: "找出所有地雷，别踩到它们",
    href: "/playground/games/minesweeper",
  },
  {
    title: "2048",
    description: "滑动方块，合成更大的数字",
    href: "/playground/games/2048",
  },
];
