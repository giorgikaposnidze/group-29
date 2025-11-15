import tkinter as tk
import random
import os

CELL = 35
COLS, ROWS = 12, 20
DELAY = 300
SHAPES = [
    [[1,1,1,1]], [[1,1],[1,1]], [[0,1,0],[1,1,1]],
    [[1,0,0],[1,1,1]], [[0,0,1],[1,1,1]], [[1,1,0],[0,1,1]], [[0,1,1],[1,1,0]]
]
COLORS = ["cyan","yellow","purple","orange","blue","green","red"]

class Tetris:
    def __init__(self, root):
        self.root = root
        self.root.title("Tetris — Simple")
        self.canvas = tk.Canvas(root, width=COLS*CELL, height=ROWS*CELL+40, bg="black")
        self.canvas.pack()
        self.highscore = self.load_highscore()
        self.restart()
        root.bind("<Left>", lambda e:self.move(-1,0))
        root.bind("<Right>",lambda e:self.move(1,0))
        root.bind("<Down>", lambda e:self.move(0,1))
        root.bind("<Up>", lambda e:self.rotate())
        root.bind("r", lambda e:self.restart())
        self.update_game()

    def load_highscore(self):
        if os.path.exists("highscore.txt"):
            try:
                return int(open("highscore.txt").read())
            except:
                return 0
        return 0

    def save_highscore(self):
        with open("highscore.txt","w") as f:
            f.write(str(self.highscore))

    def restart(self,event=None):
        self.grid=[[0]*COLS for _ in range(ROWS)]
        self.score=0
        self.game_over=False
        self.new_piece()
        self.draw()

    def new_piece(self):
        i=random.randint(0,len(SHAPES)-1)
        self.piece={"shape":SHAPES[i],"color":COLORS[i],"x":COLS//2-2,"y":0}
        if self.collide(): self.game_over=True; self.check_highscore()

    def collide(self):
        s=self.piece["shape"]
        for y,row in enumerate(s):
            for x,v in enumerate(row):
                if v:
                    nx,ny=self.piece["x"]+x,self.piece["y"]+y
                    if nx<0 or nx>=COLS or ny>=ROWS or (ny>=0 and self.grid[ny][nx]): return True
        return False

    def merge(self):
        s=self.piece["shape"];c=self.piece["color"]
        for y,row in enumerate(s):
            for x,v in enumerate(row):
                if v: self.grid[self.piece["y"]+y][self.piece["x"]+x]=c
        self.clear_lines(); self.new_piece()

    def clear_lines(self):
        new_grid=[r for r in self.grid if any(c==0 for c in r)]
        cleared=ROWS-len(new_grid)
        self.score+=cleared*100
        if self.score>self.highscore: self.highscore=self.score; self.save_highscore()
        while len(new_grid)<ROWS: new_grid.insert(0,[0]*COLS)
        self.grid=new_grid

    def move(self,dx,dy):
        if self.game_over: return
        self.piece["x"]+=dx; self.piece["y"]+=dy
        if self.collide():
            self.piece["x"]-=dx; self.piece["y"]-=dy
            if dy: self.merge()
        self.draw()

    def rotate(self):
        if self.game_over: return
        s=[list(r) for r in zip(*self.piece["shape"][::-1])]
        old=self.piece["shape"]; self.piece["shape"]=s
        if self.collide(): self.piece["shape"]=old
        self.draw()

    def check_highscore(self):
        if self.score>self.highscore: self.highscore=self.score; self.save_highscore()

    def draw_cell(self,x,y,color):
        self.canvas.create_rectangle(x*CELL,y*CELL,(x+1)*CELL,(y+1)*CELL,fill=color,outline="gray")

    def draw(self):
        self.canvas.delete("all")
        for y,row in enumerate(self.grid):
            for x,c in enumerate(row):
                if c: self.draw_cell(x,y,c)
        s=self.piece["shape"];c=self.piece["color"]
        for y,row in enumerate(s):
            for x,v in enumerate(row):
                if v and self.piece["y"]+y>=0: self.draw_cell(self.piece["x"]+x,self.piece["y"]+y,c)
        self.canvas.create_text(5,ROWS*CELL+15,text=f"Score: {self.score}",fill="white",anchor="w")
        self.canvas.create_text(180,ROWS*CELL+15,text=f"High Score: {self.highscore}",fill="yellow",anchor="w")
        if self.game_over:
            self.canvas.create_text(COLS*CELL//2,ROWS*CELL//2,text="GAME OVER",fill="red",font=("Arial",20))
            self.canvas.create_text(COLS*CELL//2,ROWS*CELL//2+30,text="Press R to Restart",fill="white",font=("Arial",12))

    def update_game(self):
        if not self.game_over: self.move(0,1)
        self.root.after(DELAY,self.update_game)

root=tk.Tk()
game=Tetris(root)
root.mainloop()