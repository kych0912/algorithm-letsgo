#include<iostream>
#include<algorithm>
#include<string>
#include<cmath>
#include<queue>
#include<vector>
#include<set>
#include<cmath>
#include<stack>
#include<cstring>

using namespace std;
int n, m;
int arr[9] = { 0 };
bool VISITED[9] = { false };

void collaboration(int x, int cnt) {
	if (cnt == m) {
		for (int i = 0; i < m; i++) {
			cout << arr[i] << " ";
		}
		cout << "\n";
	}
	else {
		for (int i = x; i <= n; i++){
			arr[cnt] = i;
			collaboration(i, cnt + 1);
		}
	}

}

int main(void) {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	cin >> n >> m;
	collaboration(1, 0);



	return 0;
}