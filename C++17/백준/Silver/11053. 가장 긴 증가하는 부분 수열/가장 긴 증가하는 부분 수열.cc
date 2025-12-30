#include<iostream>
#include<algorithm>
#include<string>
#include<cmath>
#include<queue>
#include<vector>
#include<set>
#include<cstring>

using namespace std;
int DP[1001] = { 1 };
int main(void) {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	vector<int>map;
	
	int n;
	cin >> n;
	for (int i = 0; i < n; i++) {
		int x;
		cin >> x;
		map.push_back(x);
	}
	for (int i = 0; i < 1001; i++) {
		DP[i] = 1;
	}

	for (int i = 0; i < n; i++) {
		for (int j = 0; j <= i; j++) {
			if (map[i] > map[j]) {

				DP[i] = max(DP[j] + 1, DP[i]);

			}
		}
	}
	int max1 = -1;
	for (int i = 0; i < n; i++) {
		max1 = max(DP[i], max1);
	}

	cout << max1;

	return 0;
}