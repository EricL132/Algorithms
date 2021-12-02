#Not finished
class Solution:
    def exist(self, board: list[list[str]], word: str) -> bool:
        for i in range(len(word)):
            wordRep = word 
            for k in range(len(board)):
                for j in range(len(board[0])):
                    found=False
                    if board[k][j] == wordRep[i]:
                        while True:
                            if board[k][j-1] == wordRep[i]:
                                found=True
                            elif board[k][j-1] == wordRep[i]:
                                found==True
                            elif k-1>0 and board[k-1][j] == wordRep[i]:
                                found=True
                            elif k+1<len(board) and board[k+1][j] == wordRep[i]:
                                found=True
                            if found == True:
                                # print("fa")
                                # print(wordRep[i])
                                wordRep = wordRep.replace(wordRep[i],"")
                                k=0
                                break
                            else:
                                break
            if wordRep=="":
                print(True)

                        
                    
                        

                
                

board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]] 
word = "ABCCED"

Solution.exist("",board,word)