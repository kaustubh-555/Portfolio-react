#include<bits/stdc++.h>
class Solution {
public:
    bool solve(string &s1,int i1,string &s2,int i2, string &s3,string cur,vector<vector<bool>>& dp){
        if(cur==s3){
            return true;
        }
        if(dp[i1][i2]!=-1)}{
            return dp[i1][i2];
        }
        bool ans=false;
        if(i1<s1.size()){
            cur.push_back(s1[i1]);
            ans=ans|solve(s1,i1+1,s2,i2,s3,i+1,cur);
            cur.pop_back();
        }
        if(i2<s2.size()){
            cur.push_back(s2[i2]);
            ans=ans|solve(s1,i1,s2,i2+1,s3,i+1,cur);
        }
        return ans;
    }
    bool isInterleave(string s1, string s2, string s3) {
        vector<vector<bool>> dp(s1.size(),vector<int> (s2.size(),-1));
        if(s3.size()!=s1.size()+s2.size()){
            return false;
        }
        return solve(s1,0,s2,0,s3,0,"");
    }
};
int main(){
    return 0;
}